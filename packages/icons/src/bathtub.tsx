import { mdiBathtub } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bathtub(props: IconComponentProps) {
  return <Icon path={mdiBathtub} {...props} />;
}

export { mdiBathtub as path };
