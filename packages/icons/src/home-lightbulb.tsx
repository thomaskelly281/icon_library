import { mdiHomeLightbulb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeLightbulb(props: IconComponentProps) {
  return <Icon path={mdiHomeLightbulb} {...props} />;
}

export { mdiHomeLightbulb as path };
