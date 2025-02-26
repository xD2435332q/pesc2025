import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

import { useEffect, useState } from "react";
import { getHouses, createHouse, updateHouse, deleteHouse, type House } from "@/lib/api/houses";
import { useToast } from "@/components/ui/use-toast";
import { PropertyForm } from "./property-form";

const Properties = () => {
  const [properties, setProperties] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await getHouses();
      setProperties(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load properties",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // const handleAdd = async (data: any) => {
  //   try {
  //     await createHouse(data);
  //     toast({ title: "Success", description: "Property created successfully" });
  //     loadProperties();
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "Failed to create property",
  //       variant: "destructive",
  //     });
  //   }
  // };

  // const handleEdit = async (id: number, data: any) => {
  //   try {
  //     await updateHouse(id, data);
  //     toast({ title: "Success", description: "Property updated successfully" });
  //     loadProperties();
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "Failed to update property",
  //       variant: "destructive",
  //     });
  //   }
  // };

  const handleDelete = async (id: number) => {
    try {
      await deleteHouse(id);
      toast({ title: "Success", description: "Property deleted successfully" });
      loadProperties();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete property",
        variant: "destructive",
      });
    }
  };

  // import { PropertyForm } from "./property-form";

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const handleAdd = (data: any) => {
    console.log("Adding property:", data);
    setIsAddModalOpen(false);
  };

  const handleEdit = (data: any) => {
    console.log("Editing property:", data);
    setIsEditModalOpen(false);
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Properties</h1>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>

        <PropertyForm
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAdd}
        />

        {selectedProperty && (
          <PropertyForm
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onSubmit={handleEdit}
            initialData={selectedProperty}
          />
        )}
      </div>
      <DataTable columns={columns} data={properties} searchKey="name" />
    </div>
  );
}
export default Properties;