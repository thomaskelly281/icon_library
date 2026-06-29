import { mdiNotePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotePlus(props: IconComponentProps) {
  return <Icon path={mdiNotePlus} {...props} />;
}

export { mdiNotePlus as path };
