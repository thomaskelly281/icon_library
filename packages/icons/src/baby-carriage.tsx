import { mdiBabyCarriage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BabyCarriage(props: IconComponentProps) {
  return <Icon path={mdiBabyCarriage} {...props} />;
}

export { mdiBabyCarriage as path };
