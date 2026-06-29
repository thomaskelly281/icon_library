import { mdiContrast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Contrast(props: IconComponentProps) {
  return <Icon path={mdiContrast} {...props} />;
}

export { mdiContrast as path };
