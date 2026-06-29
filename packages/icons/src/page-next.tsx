import { mdiPageNext } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageNext(props: IconComponentProps) {
  return <Icon path={mdiPageNext} {...props} />;
}

export { mdiPageNext as path };
