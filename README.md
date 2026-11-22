# NameSync — Two-Way Live Civic Resolution Platform

**NameSync** is a minimal, streamlined two-way civic resolution platform for Indian demographic discrepancies (PAN, Resident ID, Bank, Ration Card). It connects the **Citizen Desk** directly to the **Gov Officer Inbox** in a real-time decision loop.

---

## 🚀 Key Workflow

### 1. Minimal Top Bar
- **Left**: **NameSync** title.
- **Center**: **Citizen Desk** | **Gov Officer Inbox** toggle (with live pending application count badge).
- **Right**: **Load Sample Case** button + Language Selector (**English**, **हिन्दी**, **ಕನ್ನಡ**, **தமிழ்**, **తెలుగు**).

### 2. Citizen Desk (Upload → "Sent for Analyzing" → Fix Card → Dispatch)
1. **Clean Start**:
   - Starts with only the **Document Upload Strip**:
     - **Slot 1**: Master Proof (e.g., PAN Card)
     - **Slot 2**: Document to Fix (e.g., Resident ID)
     - **Slot 3**: Optional 3rd Document
     - **"Send for Analyzing"** button.
2. **Analyze & Simple Mismatch Summary**:
   - Shows `✓ Documents Sent for Analyzing...` while processing.
   - Displays a clean card:
     - **Master Document**: PAN Card (`DEMO-PAN-9942X`)
     - **What Needs Fixing**: Simple red $\rightarrow$ green lines:
       - Name: `Ramesh K. Sharma` $\rightarrow$ `RAMESH KUMAR SHARMA`
       - DOB: `1982` $\rightarrow$ `14/08/1982`
       - Father's Name: `K. C. Sharma` $\rightarrow$ `KAILASH CHAND SHARMA`
     - **Fix Order**: `"Fix Resident ID first using your PAN Card."`
     - **Auto-Drafted Application**: Short request letter in the selected language with a **"Send to Officer Portal"** button.
3. **Live Status Box**:
   - Once dispatched, shows a prominent status box with a Reference ID (e.g., `APP-2026-104`):
     - `⏳ Sent to Officer — Pending Review` (Amber)
     - `✅ Documents Approved & Synced` (Green)
     - `⚠️ Re-Flagged / Action Needed` (Orange, with officer's note)
     - `❌ Application Rejected` (Red, with officer's reason)

### 3. Gov Officer Inbox (Live Match & 1-Click Decision)
- The application appears at the top of the queue.
- **Side-by-Side Review Card**:
  - **Left**: Master Proof document photo + extracted details (`RAMESH KUMAR SHARMA`, `14/08/1982`).
  - **Right**: Requested changes (`Old Value` $\rightarrow$ `New Value`) and application note.
- **1-Line Optional Remark Input**
- **3 Clear Decision Buttons**:
  - `✓ Agree & Approve` $\rightarrow$ updates Citizen Desk to `✅ Documents Approved & Synced`.
  - `↻ Re-Flag (Ask for Re-upload)` $\rightarrow$ updates Citizen Desk to `⚠️ Re-Flagged / Action Needed`.
  - `✕ Reject` $\rightarrow$ updates Citizen Desk to `❌ Application Rejected`.

---

## 🏃 Running the Application

The server is currently running at:
**[http://localhost:3001](http://localhost:3001)**

To re-run the verification test suite:
```bash
node test/e2e-verification.js
```
