import { mdiBulma } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bulma(props: IconComponentProps) {
  return <Icon path={mdiBulma} {...props} />;
}

export { mdiBulma as path };
