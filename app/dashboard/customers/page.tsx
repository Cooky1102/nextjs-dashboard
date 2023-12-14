import Table from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams.query || "";
  const customers = await fetchFilteredCustomers(query);
  return <Table customers={customers} />;
}
