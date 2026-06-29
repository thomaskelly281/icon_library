import { mdiRugby } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rugby(props: IconComponentProps) {
  return <Icon path={mdiRugby} {...props} />;
}

export { mdiRugby as path };
