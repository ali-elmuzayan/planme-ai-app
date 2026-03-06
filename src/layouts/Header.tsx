import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="glass-card flex items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-lg text-gray-700 font-bold tracking-wide"
            >
              PlanMe AI
            </Link>
            <span className="hidden tex-xs text-muted-foreground/8 font-bold sm:inline">
              Glassmorphism UI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-none">
              العربية
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
