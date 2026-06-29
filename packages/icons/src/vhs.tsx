import { mdiVhs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vhs(props: IconComponentProps) {
  return <Icon path={mdiVhs} {...props} />;
}

export { mdiVhs as path };
