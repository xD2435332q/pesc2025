import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ModalForm } from "@/components/ui/modal-form";
import { useState } from "react";

interface ExcursionFormData {
  name: string;
  description: string;
  location: string;
  price: number;
  duration: string;
  video_url?: string;
}

interface ExcursionFormProps {
  initialData?: ExcursionFormData;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ExcursionFormData) => void;
}

export function ExcursionForm({
  initialData,
  isOpen,
  onClose,
  onSubmit,
}: ExcursionFormProps) {
  const [formData, setFormData] = useState<ExcursionFormData>(
    initialData || {
      name: "",
      description: "",
      location: "",
      price: 0,
      duration: "",
      video_url: "",
    },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <ModalForm
      title={initialData ? "Edit Excursion" : "Add New Excursion"}
      description="Add or modify excursion details"
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
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: parseFloat(e.target.value),
                })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
              required
              placeholder="e.g., 2 hours"
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
