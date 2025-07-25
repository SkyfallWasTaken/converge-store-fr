import { createUploadthing } from 'uploadthing/server';
import type { FileRouter } from 'uploadthing/server';

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({
		image: {
			maxFileSize: '4MB',
			maxFileCount: 1
		}
	}).onUploadComplete(async ({ metadata, file }) => {
		console.log('file url', file.ufsUrl);
	})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
