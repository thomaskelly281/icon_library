import { mdiHomeGroupMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeGroupMinus(props: IconComponentProps) {
  return <Icon path={mdiHomeGroupMinus} {...props} />;
}

export { mdiHomeGroupMinus as path };
