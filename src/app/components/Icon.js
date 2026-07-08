import {
  Shirt,
  HardHat,
  Stethoscope,
  ChefHat,
  Briefcase,
  GraduationCap,
  Shield,
  ShoppingBag,
  Package,
} from "lucide-react";

const map = {
  Shirt,
  HardHat,
  Stethoscope,
  ChefHat,
  Briefcase,
  GraduationCap,
  Shield,
  ShoppingBag,
};

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Package;
  return <Cmp {...props} />;
}
