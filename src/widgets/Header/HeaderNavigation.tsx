import Search from '../../shared/ui/search';
import NavButtons from './NavButtons';

const HeaderNavigation = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {pathname.includes('search') ? (
        <div className="flex items-center gap-5">
          <NavButtons />
          <Search />
        </div>
      ) : (
        <NavButtons />
      )}
    </>
  );
};

export { HeaderNavigation };
