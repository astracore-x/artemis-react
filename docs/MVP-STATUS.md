# MVP status and production handoff

## Delivered frontend

The approved visual prototype has been rebuilt as React components rather than injecting the original HTML or script. Styling preserves the white/blue bento direction, compact colored Kanban cards, dark navy accents, status chips, assignee rows, and date/activity footers.

User actions persist in the browser through a versioned storage key. This is suitable for reviewing layouts and local interactions. UI role restrictions demonstrate intended behavior; they are not security controls.

## Not connected

- Email/password signup, password policy, email verification, password recovery, and Google OAuth.
- Server-side identity, authorization, organization isolation, domain ownership, or account provisioning.
- Secure one-use, expiring, email-bound invitation issuance/consumption and email delivery. Current tokens are demonstration values stored locally.
- Background checks, credential/experience verification, reference contacting, or country-specific eligibility verification.
- Database, private object storage, durable resume files, email notifications, and real AI recommendations.
- Server-side approvals, immutable audit logging, concurrent edits, and workflow execution.
- Full WYSIWYG assessment editing. Current input supports basic Markdown.
- Reliable production accessibility and device/browser certification; visual browser QA was not available during packaging.

## Deliberate prototype assumptions

- Default hunter sample is marked complete so reviewers can explore immediately. New-user mode requires the completion checks, including an uploaded image.
- First-time applicants may select “no work experience yet.”
- Three distinct priority fields are required. Job titles and skills are selected from starter catalogs, which are not an exhaustive taxonomy.
- Skill tags are a starter list, not dynamically derived from each selected title.
- Customer Service can edit hunter/organization records and handle tickets. The final production permissions matrix must be approved.
- Multiple stage approvers may be selected, but all/any approval quorum and rejection behavior are not implemented.
- Calendar examples focus on October 2026. Member visibility can be previewed with a demo selector.
- Dashboard trends and match percentages include static sample metrics, not analytics or AI results.
- PDF export uses the browser print dialog.

## Suggested implementation order

1. Approve role/permission matrix and final field validation rules.
2. Connect authentication and server-side tenant/domain verification.
3. Add database schema, row-level authorization, private uploads, and verified organization memberships.
4. Replace local invites with hashed expiring tokens consumed atomically and bound to verified emails.
5. Add application records, workflow versioning, real approval tasks, assessment responses, and event visibility enforcement.
6. Add server-side record audit events and restricted support tooling.
7. Connect AI matching through a server-side gateway. Never place provider keys in browser code or VITE variables.
8. Add end-to-end tests, accessibility review, and security/UAT checks before production use.
