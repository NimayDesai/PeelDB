import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/pages";

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  profilePics: es.imageBucket(),
});

export default createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

export type EdgeStoreRouter = typeof edgeStoreRouter;
