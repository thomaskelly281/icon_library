import { mdiHighDefinition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HighDefinition(props: IconComponentProps) {
  return <Icon path={mdiHighDefinition} {...props} />;
}

export { mdiHighDefinition as path };
