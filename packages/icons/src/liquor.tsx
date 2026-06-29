import { mdiLiquor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Liquor(props: IconComponentProps) {
  return <Icon path={mdiLiquor} {...props} />;
}

export { mdiLiquor as path };
