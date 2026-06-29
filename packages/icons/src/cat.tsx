import { mdiCat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cat(props: IconComponentProps) {
  return <Icon path={mdiCat} {...props} />;
}

export { mdiCat as path };
