/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />


interface ImportMetaEnv {
	// Declare the new SMTP variables we are using in contact.ts
	readonly SMTP_HOST: string;
	readonly SMTP_PORT: string;
	readonly SMTP_USER: string;
	readonly SMTP_PASS: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}