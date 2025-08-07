# 🛡️ Assessment Tool – NIS2 / ISO-to-NIS2 / ISO/IEC 27001

Un'applicazione React completa per la gestione di questionari di conformità relativi a diversi framework di sicurezza: **NIS2**, **ISO-to-NIS2** e **ISO/IEC 27001**.

## 🚀 Funzionalità principali

- ✅ **Importazione domande da file Excel (.xlsx)**
- 📋 **Compilazione guidata dei questionari**
- 📈 **Dashboard riepilogativa con grafico percentuale delle criticità**
- 🧾 **Generazione di report PDF in formato standard**
- 👤 **Gestione profilo utente (nome, email, ruolo)**
- 🔙 **Navigazione tra domande e salvataggio risposte**
- 🧩 **Struttura modulare per diversi assessment**

---


---

## 📥 Importazione domande

Il file Excel caricato **deve contenere una struttura tabellare** con intestazioni coerenti:

- `ID`
- `Domande`
- `CODICE ACN`
- `Abiti e politiche`
- `Descrizione`

> L'utente seleziona **il tipo di assessment** (es. NIS2) e le domande vengono mostrate nella pagina `QuestionUploaded.jsx`.

---

## 🧠 Logica delle risposte

Ogni domanda accetta una delle seguenti risposte:

- `Implementato` → 25 punti
- `Parzialmente implementato` → 12.5 punti
- `Non implementato` → 0 punti
- `Non applicabile` → 0 punti (non influisce sulle criticità)

Le risposte sono calcolate per determinare il livello di **criticità complessiva** e generare grafici e report PDF.

---

## 📊 Dashboard

La pagina `DashboardResults.jsx` mostra:

- Conteggio di tutte le risposte per categoria
- Percentuale di criticità
- Grafico a torta (`Chart.js`)
- Pulsante per scaricare il **PDF riepilogativo**

---

## 🧾 Report PDF

La pagina `ReportGenerator.jsx` genera un PDF utilizzando `pdfmake`, includendo:

- Titolo e nome cliente
- Stato di ciascuna area (Govern, Identify, Protect…)
- Tabella con osservazioni e punti da attenzionare

---

## 🧪 Requisiti

- React 18+
- React Router DOM
- Heroicons
- Chart.js
- XLSX
- jsPDF / pdfmake

Installa tutte le dipendenze:


npm install

🙋‍♀️ Autrice
👩‍💻 Sviluppato da Luisa Mele, Cybersecurity and Cloud Engineer

