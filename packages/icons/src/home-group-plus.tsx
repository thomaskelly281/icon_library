import { mdiHomeGroupPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeGroupPlus(props: IconComponentProps) {
  return <Icon path={mdiHomeGroupPlus} {...props} />;
}

export { mdiHomeGroupPlus as path };
