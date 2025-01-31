import { prisma } from "@/lib/prisma";

const AdminPage = async () => {
  const portfolios = await prisma.portfolio.findMany();
  return (
    <div>
      {portfolios?.map((portfolio) => (
        <div key={portfolio.category}>
          <span>{portfolio.id}</span>
          <span>{portfolio.category}</span>
          <button>{portfolio.theme}</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
