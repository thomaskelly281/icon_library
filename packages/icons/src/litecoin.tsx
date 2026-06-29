import { mdiLitecoin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Litecoin(props: IconComponentProps) {
  return <Icon path={mdiLitecoin} {...props} />;
}

export { mdiLitecoin as path };
