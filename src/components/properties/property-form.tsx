import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ModalForm } from "@/components/ui/modal-form";
import { useState } from "react";

interface PropertyFormData {
  name: string;
  description: string;
  address: string;
  price_per_night: number;
  capacity: number;
  video_url?: string;
}

interface PropertyFormProps {
  initialData?: PropertyFormData;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PropertyFormData) => void;
}

export function PropertyForm({
  initialData,
  isOpen,
  onClose,
  onSubmit,
}: PropertyFormProps) {
  const [formData, setFormData] = useState<PropertyFormData>(
    initialData || {
      name: "",
      description: "",
      address: "",
      price_per_night: 0,
      capacity: 1,
      video_url: "",
    },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <ModalForm
      title={initialData ? "Edit Property" : "Add New Property"}
      description="Add or modify property details"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price per Night</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              value={formData.price_per_night}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price_per_night: parseFloat(e.target.value),
                })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="capacity">Capacity</Label>
            <Input
              id="capacity"
              type="number"
              min="1"
              value={formData.capacity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  capacity: parseInt(e.target.value),
                })
              }
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="video">Video URL (optional)</Label>
          <Input
            id="video"
            type="url"
            value={formData.video_url}
            onChange={(e) =>
              setFormData({ ...formData, video_url: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">{initialData ? "Update" : "Create"}</Button>
        </div>
      </form>
    </ModalForm>
  );
}
