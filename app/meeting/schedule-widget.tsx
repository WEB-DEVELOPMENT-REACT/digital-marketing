"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PiCalendarCheck, PiClock } from "react-icons/pi";

const availability = [
  {
    label: "Esta semana",
    daysAhead: [1, 2, 3],
    slots: ["09:00", "11:30", "16:00"],
  },
  {
    label: "Próxima semana",
    daysAhead: [5, 6, 7, 8],
    slots: ["10:00", "13:00", "17:30"],
  },
  {
    label: "Sesión express",
    daysAhead: [0],
    slots: ["18:00"],
  },
] as const;

const meetingTypes = [
  {
    id: "discover",
    title: "Discovery call",
    description: "30 minutos para entender tu proyecto y objetivos.",
    duration: 30,
  },
  {
    id: "workshop",
    title: "Workshop IA",
    description: "45 minutos para mapear oportunidades de automatización.",
    duration: 45,
  },
  {
    id: "growth",
    title: "Sprint de crecimiento",
    description: "45 minutos revisando funnel, campañas y próximos pasos.",
    duration: 45,
  },
] as const;

type SelectedSlot = {
  groupLabel: string;
  date: Date;
  time: string;
  meeting: (typeof meetingTypes)[number];
};

type FormData = {
  name: string;
  email: string;
  company: string;
  country: string;
  notes: string;
};

function generateDate(offset: number) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date;
}

function buildDateWithTime(date: Date, time: string) {
  const [hours, minutes] = time.split(":").map((value) => parseInt(value, 10));
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
}

function formatDateShort(date: Date) {
  return capitalize(
    new Intl.DateTimeFormat("es-ES", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(date),
  );
}

function formatDateLong(date: Date) {
  return capitalize(
    new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date),
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function createEmailHref(slot: SelectedSlot, form: FormData) {
  const subject = `Reserva Bird ${slot.meeting.title}`;
  const body = `Hola equipo Bird,%0D%0A%0D%0AQuiero reservar ${slot.meeting.title.toLowerCase()} el ${formatDateLong(
    slot.date,
  )} a las ${slot.time} (hora Madrid).%0D%0A%0D%0ANombre: ${form.name}%0D%0AEmail: ${
    form.email
  }%0D%0AEmpresa: ${form.company}%0D%0APaís/Zona: ${form.country}%0D%0ANotas: ${
    form.notes
  }%0D%0A%0D%0AGracias!`;

  return `mailto:desarrollador@duverxmobiledev.es?subject=${encodeURIComponent(
    subject,
  )}&body=${body}`;
}

function createWhatsappHref(slot: SelectedSlot, form: FormData) {
  const message = `Hola Bird 👋%0A%0AMe gustaría reservar ${slot.meeting.title.toLowerCase()} el ${formatDateLong(
    slot.date,
  )} a las ${slot.time} (hora Madrid).%0A%0ANombre: ${form.name}%0AEmail: ${form.email}%0AEmpresa: ${form.company}%0APaís/Zona: ${form.country}%0ANotas: ${form.notes}`;
  return `https://wa.me/673685542?text=${message}`;
}

function formatICSDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeICS(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,");
}

function createICS(slot: SelectedSlot, form: FormData) {
  const start = buildDateWithTime(slot.date, slot.time);
  const end = new Date(start.getTime() + slot.meeting.duration * 60 * 1000);
  return `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Bird//Schedule//ES\nBEGIN:VEVENT\nUID:${Date.now()}@bird-marketing\nDTSTAMP:${formatICSDate(new Date())}\nDTSTART:${formatICSDate(start)}\nDTEND:${formatICSDate(end)}\nSUMMARY:${escapeICS(`Bird · ${slot.meeting.title}`)}\nDESCRIPTION:${escapeICS(
    `Nombre: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company}\nNotas: ${form.notes}`,
  )}\nLOCATION:Online (Google Meet)\nEND:VEVENT\nEND:VCALENDAR`;
}

function downloadICS(slot: SelectedSlot, form: FormData) {
  const ics = createICS(slot, form);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `bird-${slot.meeting.id}-${formatICSDate(buildDateWithTime(slot.date, slot.time))}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

function buildSummary(slot: SelectedSlot, form: FormData) {
  return [
    `Tipo: ${slot.meeting.title}`,
    `Fecha: ${formatDateLong(slot.date)}`,
    `Hora (Madrid): ${slot.time}`,
    `Nombre: ${form.name}`,
    `Email: ${form.email}`,
    `Empresa: ${form.company}`,
    `País/Zona: ${form.country}`,
    `Notas: ${form.notes}`,
  ]
    .filter((line) => line.trim())
    .join("\n");
}

export default function ScheduleWidget() {
  const [selectedMeeting, setSelectedMeeting] = useState<(typeof meetingTypes)[number]>(
    meetingTypes[0],
  );
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    country: "",
    notes: "",
  });
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");

  const slots = useMemo(() => {
    return availability.flatMap((group) =>
      group.daysAhead.flatMap((day) =>
        group.slots.map((time) => ({
          groupLabel: group.label,
          date: generateDate(day),
          time,
        })),
      ),
    );
  }, []);

  const handleSlotSelect = (groupLabel: string, date: Date, time: string) => {
    setSelectedSlot({
      groupLabel,
      date,
      time,
      meeting: selectedMeeting,
    });
  };

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCopy = async () => {
    if (!selectedSlot || !navigator.clipboard) return;
    await navigator.clipboard.writeText(buildSummary(selectedSlot, formData));
    setCopyState("copied");
    setTimeout(() => setCopyState("idle"), 2500);
  };

  const isReady = Boolean(
    selectedSlot && formData.name.trim() && formData.email.trim(),
  );

  const emailHref = selectedSlot ? createEmailHref(selectedSlot, formData) : "#";
  const whatsappHref = selectedSlot ? createWhatsappHref(selectedSlot, formData) : "#";

  return (
    <div className="rounded-[28px] border border-black/5 bg-white/90 p-8 shadow-[0_35px_55px_-35px_rgba(15,23,42,0.45)] backdrop-blur">
      <header className="flex items-center gap-3 border-b border-gray-200 pb-4">
        <span className="rounded-full bg-blue-100/70 p-3 text-blue-600">
          <PiCalendarCheck className="text-2xl" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
            Agenda
          </p>
          <h2 className="text-xl font-semibold text-slate-900">
            Reserva tu sesión con Bird
          </h2>
        </div>
      </header>

      <section className="mt-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Tipo de reunión
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {meetingTypes.map((meeting) => {
            const active = selectedMeeting.id === meeting.id;
            return (
              <button
                key={meeting.id}
                type="button"
                onClick={() => {
                  setSelectedMeeting(meeting);
                  setSelectedSlot((prev) =>
                    prev ? { ...prev, meeting } : prev,
                  );
                }}
                className={`rounded-2xl border px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 ${active ? "border-blue-500/70 bg-blue-50 text-blue-700 shadow-[0_15px_35px_-25px_rgba(59,130,246,0.55)]" : "border-gray-200 text-gray-700"}`}
              >
                <p className="text-sm font-semibold">{meeting.title}</p>
                <p className="text-xs text-gray-500">{meeting.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-gray-600">
          Nombre completo*
          <input
            value={formData.name}
            onChange={(event) => handleInputChange("name", event.target.value)}
            placeholder="Laura Gómez"
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 shadow-inner focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-600">
          Email profesional*
          <input
            type="email"
            value={formData.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            placeholder="laura@empresa.com"
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 shadow-inner focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-600">
          Empresa / Proyecto
          <input
            value={formData.company}
            onChange={(event) => handleInputChange("company", event.target.value)}
            placeholder="Nombre de la empresa"
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 shadow-inner focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-600">
          País / Ciudad
          <input
            value={formData.country}
            onChange={(event) => handleInputChange("country", event.target.value)}
            placeholder="España, Portugal, Alemania..."
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 shadow-inner focus:border-blue-500 focus:outline-none"
          />
        </label>
        <label className="md:col-span-2 flex flex-col gap-1 text-sm text-gray-600">
          Notas para la sesión
          <textarea
            value={formData.notes}
            onChange={(event) => handleInputChange("notes", event.target.value)}
            placeholder="Comparte objetivos, enlaces o preguntas para preparar la llamada."
            rows={3}
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 shadow-inner focus:border-blue-500 focus:outline-none"
          />
        </label>
      </section>

      <section className="mt-8 space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <span className="rounded-full bg-slate-100 p-2 text-slate-600 shadow-inner">
            <PiClock className="text-lg" />
          </span>
          <span>Selecciona fecha y horario (hora Madrid)</span>
        </div>
        <div className="grid gap-4">
          {availability.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-gray-200/80 bg-white/70 p-5 shadow-[0_15px_45px_-30px_rgba(15,23,42,0.4)]"
            >
              <p className="text-sm font-semibold text-gray-800">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {slots
                  .filter((slot) => slot.groupLabel === group.label)
                  .map((slot) => {
                    const isSelected =
                      selectedSlot?.time === slot.time &&
                      selectedSlot?.date.toDateString() === slot.date.toDateString();
                    return (
                      <button
                        key={`${slot.groupLabel}-${slot.date.toDateString()}-${slot.time}`}
                        type="button"
                        onClick={() => handleSlotSelect(slot.groupLabel, slot.date, slot.time)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 ${isSelected ? "border-blue-500 bg-blue-50 text-blue-600 shadow-[0_15px_35px_-25px_rgba(37,99,235,0.5)]" : "border-gray-200 text-gray-700"}`}
                      >
                        <span className="block text-xs uppercase tracking-[0.3em] text-gray-400">
                          {formatDateShort(slot.date)}
                        </span>
                        <span className="block text-base font-semibold text-gray-900">
                          {slot.time} h CET
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedSlot ? (
        <section className="mt-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 text-sm text-gray-700 shadow-[0_25px_50px_-35px_rgba(37,99,235,0.45)]">
          <p className="font-semibold text-blue-700">
            Hemos reservado provisoriamente:
          </p>
          <ul className="mt-2 space-y-1 text-blue-900">
            <li>• {selectedSlot.meeting.title} el {formatDateLong(selectedSlot.date)}</li>
            <li>• Horario Madrid (CET): {selectedSlot.time}</li>
            <li>• Duración estimada: {selectedSlot.meeting.duration} minutos</li>
            <li>• Modalidad: videollamada Google Meet</li>
          </ul>
          <p className="mt-3 text-blue-700">
            Confirma por tu canal favorito o añade la cita a tu calendario.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={emailHref}
              onClick={(event) => {
                if (!isReady) event.preventDefault();
              }}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                isReady
                  ? "border-blue-500 bg-white text-blue-600 hover:-translate-y-0.5 hover:bg-blue-100"
                  : "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
              }`}
            >
              Enviar email de confirmación
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              onClick={(event) => {
                if (!isReady) event.preventDefault();
              }}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                isReady
                  ? "border-green-500 bg-white text-green-600 hover:-translate-y-0.5 hover:bg-green-100"
                  : "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
              }`}
            >
              Confirmar por WhatsApp
            </Link>
            <button
              type="button"
              onClick={() => selectedSlot && downloadICS(selectedSlot, formData)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:bg-gray-100"
            >
              Descargar .ics
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:bg-gray-100"
            >
              {copyState === "copied" ? "Resumen copiado" : "Copiar resumen"}
            </button>
          </div>
          {!isReady && (
            <p className="mt-3 text-xs text-blue-600">
              Añade nombre y email para habilitar el envío automático.
            </p>
          )}
        </section>
      ) : (
        <section className="mt-8 rounded-2xl border border-gray-200 bg-gray-50/80 p-5 text-sm text-gray-600">
          Selecciona un tipo de reunión, completa tus datos y elige un horario para desbloquear las opciones de confirmación.
        </section>
      )}

      <footer className="mt-6 border-t border-gray-200 pt-4 text-xs text-gray-500">
        <p>
          ¿No encuentras un horario que encaje? Escríbenos a
          {" "}
          <Link
            href="mailto:desarrollador@duverxmobiledev.es"
            className="font-semibold text-blue-600 hover:underline"
          >
            desarrollador@duverxmobiledev.es
          </Link>
          {" "}
          o por WhatsApp y buscamos una alternativa en minutos.
        </p>
      </footer>
    </div>
  );
}
