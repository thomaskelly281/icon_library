import { mdiNutrition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nutrition(props: IconComponentProps) {
  return <Icon path={mdiNutrition} {...props} />;
}

export { mdiNutrition as path };
