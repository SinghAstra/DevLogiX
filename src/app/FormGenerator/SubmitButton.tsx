import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Generating..." : "Generate Form"}
    </Button>
  );
};

export default SubmitButton;