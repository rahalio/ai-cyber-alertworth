Use /Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold as the baseline scaffold for this application.

Copy all files and structure from the scaffold repository into this repository. Do not move or delete anything from the original scaffold. This should be a full copy/port, including Cursor rules/configuration files and all supporting codegen infrastructure.

Then:

Read the product specifications and derive the required OpenAPI specifications.
Expand the OpenAPI definitions to fully support the application requirements while following the patterns established in the scaffold.
Use one OpenAPI YAML file per domain.
Run the scaffold’s existing code-generation workflow from those OpenAPI specifications.
Scaffold the web application exactly according to the codegen scaffold first.
Only after the baseline scaffold/codegen implementation is working, modify the web app according to the product specifications by adding the required pages, views, workflows, and application-specific functionality.

Naming conventions:

Package names should use the short application name.
Do not add prefixes like ai-, zero-, or similar unnecessary prefixes.
Use @appname/... where appropriate.

Repository rules:

Add a skill/rule stating that .codegen must never be committed or pushed to GitHub.
Add .codegen to .gitignore as an additional safeguard.

Implementation sequence:

Copy scaffold → derive OpenAPI specs → one YAML per domain → run codegen → establish scaffolded web app → modify the web app to meet the product requirements.

Treat the scaffold repository as the architectural and code-generation baseline. Preserve its conventions and existing patterns rather than rebuilding equivalent infrastructure from scratch.
