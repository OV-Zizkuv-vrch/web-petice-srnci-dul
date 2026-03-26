const COMMITTEE_MEMBERS = [
  { name: 'Jana Nováková', role: 'Předsedkyně výboru' },
  { name: 'Petr Svoboda', role: 'Místopředseda' },
  { name: 'Marie Dvořáčková', role: 'Tajemnice' },
  { name: 'Tomáš Kratochvíl', role: 'Člen výboru' },
  { name: 'Lenka Procházková', role: 'Členka výboru' },
];

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">O nás</h1>
        <h2 className="text-xl font-semibold text-slate-600 mb-5">
          Osadní výbor Žižkův vrch
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Osadní výbor Žižkův vrch je nepolitická skupina zastupující zájmy obyvatel
          čtvrti Žižkův vrch v jednáních s primátorem a zastupiteli města. Naším
          posláním je hájit kvalitu života ve čtvrti, chránit její přírodní a
          historický charakter a zajišťovat, aby hlas místních obyvatel byl slyšet
          při rozhodování o budoucnosti jejich domova.
        </p>
        <p className="text-slate-700 leading-relaxed mb-8">
          Výbor byl ustaven z podnětu obyvatel Žižkova vrchu a funguje na
          dobrovolnické bázi. Pravidelně se setkáváme s představiteli samosprávy,
          organizujeme veřejná setkání a informujeme obyvatele čtvrti o plánovaných
          změnách v území.
        </p>

        <h3 className="text-lg font-semibold text-slate-700 mb-3">Členové výboru</h3>
        <ul className="divide-y divide-slate-200">
          {COMMITTEE_MEMBERS.map((member) => (
            <li key={member.name} className="py-3 flex justify-between items-center">
              <span className="font-medium text-slate-800">{member.name}</span>
              <span className="text-slate-500 text-sm">{member.role}</span>
            </li>
          ))}
        </ul>
    </>
  );
}
