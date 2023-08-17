import { nanoquery } from "@nanostores/query";
import { atom } from "nanostores";

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys: (string | number)[]) =>
    fetch(keys.join("")).then((r) => r.json()),
});

type User = { name: string };
export const $users = atom<User[]>([{ name: "John" }]);
export function addUser(user: User) {
  $users.set([...$users.get(), user]);
}
