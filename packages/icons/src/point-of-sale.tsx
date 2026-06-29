import { mdiPointOfSale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PointOfSale(props: IconComponentProps) {
  return <Icon path={mdiPointOfSale} {...props} />;
}

export { mdiPointOfSale as path };
