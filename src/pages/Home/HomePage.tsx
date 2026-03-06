import GlassCard from "@/components/common/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <GlassCard className="px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">My Notes</h1>
          <Button>
            <Plus />
            Create Notes
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-2 top-[5px] text-muted-foreground h-6 w-6" />
          <Input placeholder="search notes..." className="bg-gray-100 pl-10" />
        </div>
      </GlassCard>
    </div>
  );
};

export default HomePage;
