import { mdiBabyBottle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BabyBottle(props: IconComponentProps) {
  return <Icon path={mdiBabyBottle} {...props} />;
}

export { mdiBabyBottle as path };
