import { mdiFilterPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterPlus(props: IconComponentProps) {
  return <Icon path={mdiFilterPlus} {...props} />;
}

export { mdiFilterPlus as path };
