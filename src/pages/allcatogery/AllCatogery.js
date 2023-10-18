import ContCatogery from "../../component/catogery/ContCatogery";
import Paginations from "../../component/utility/paginations";
import AllCatogeryHook from "../../usehooks/catogery/All.Category.Hook";
function AllCatogery() {
  const [item, loading, error, pageCount, onPage] = AllCatogeryHook();
  return (
    <div>
      <ContCatogery arr={item} loading={loading} error={error} />
      <Paginations pageCount={pageCount} onPage={onPage} />
    </div>
  );
}

export default AllCatogery;
