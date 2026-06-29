import { mdiYeast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Yeast(props: IconComponentProps) {
  return <Icon path={mdiYeast} {...props} />;
}

export { mdiYeast as path };
