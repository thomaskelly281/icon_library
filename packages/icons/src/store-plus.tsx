import { mdiStorePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorePlus(props: IconComponentProps) {
  return <Icon path={mdiStorePlus} {...props} />;
}

export { mdiStorePlus as path };
