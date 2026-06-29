import { mdiSale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sale(props: IconComponentProps) {
  return <Icon path={mdiSale} {...props} />;
}

export { mdiSale as path };
