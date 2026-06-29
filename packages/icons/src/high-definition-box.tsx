import { mdiHighDefinitionBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HighDefinitionBox(props: IconComponentProps) {
  return <Icon path={mdiHighDefinitionBox} {...props} />;
}

export { mdiHighDefinitionBox as path };
