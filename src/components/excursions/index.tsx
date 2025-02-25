import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { ExcursionForm } from "./excursion-form";
import { useEffect, useState } from "react";
import {
  getExcursions,
  createExcursion,
  updateExcursion,
  deleteExcursion,
  type Excursion,
} from "@/lib/api/excursions";
import { useToast } from "@/components/ui/use-toast";

export default function Excursions() {
  const [excursions, setExcursions] = useState<Excursion[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedExcursion, setSelectedExcursion] = useState<Excursion | null>(
    null,
  );
  const { toast } = useToast();

  useEffect(() => {
    loadExcursions();
  }, []);

  const loadExcursions = async () => {
    try {
      const data = await getExcursions();
      setExcursions(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load excursions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (
    data: Omit<Excursion, "id" | "created_at" | "updated_at">,
  ) => {
    try {
      await createExcursion(data);
      toast({
        title: "Success",
        description: "Excursion created successfully",
      });
      loadExcursions();
      setIsAddModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create excursion",
        variant: "destructive",
      });
    }
  };

  const handleEdit = async (data: Partial<Excursion>) => {
    if (!selectedExcursion) return;
    try {
      await updateExcursion(selectedExcursion.id, data);
      toast({
        title: "Success",
        description: "Excursion updated successfully",
      });
      loadExcursions();
      setIsEditModalOpen(false);
      setSelectedExcursion(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update excursion",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteExcursion(id);
      toast({
        title: "Success",
        description: "Excursion deleted successfully",
      });
      loadExcursions();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete excursion",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Excursions</h1>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <DataTable columns={columns} data={excursions} searchKey="name" />

      <ExcursionForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAdd}
      />

      {selectedExcursion && (
        <ExcursionForm
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedExcursion(null);
          }}
          onSubmit={handleEdit}
          initialData={selectedExcursion}
        />
      )}
    </div>
  );
}
