import { useRouter } from "next/router";

export default function DishPage() {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <input
        value={router.query.search || ""}
        onChange={(event) => {
          const path = `/dish/${(router.query.dishId || []).join("/")}`;
          const query = event.target.value
            ? `search=${event.target.value}`
            : "";
          router.push(`${path}?${query}`);
        }}
      />
    </div>
  );
}
