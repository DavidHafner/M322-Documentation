import { defineStore } from "pinia";

export const usePageStore = defineStore("app", () => {
	const path = ref<{ name: string; path: string; current: boolean }[]>([]);
	const addPageToPath = (name: string, _path: string) => {
		path.value.forEach((part) => {
			part.current = false;
		});
		path.value.push({ name: name, path: _path, current: true });
	};
	const resetPath = (
		page: { name: string; path: string } = { name: "home", path: "/" }
	) => {
		path.value = [{ name: page.name, path: page.path, current: true }];
	};

	const pages = ref<{ name: string; path: string }[]>([]);

	const goToPage = (page: { name: string; path: string }) => {
		const router = useRouter();
		resetPath(page);
		router.push(page.path);
	};
	return { path, addPageToPath, resetPath, pages, goToPage };
});
