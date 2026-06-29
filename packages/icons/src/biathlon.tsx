import { mdiBiathlon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Biathlon(props: IconComponentProps) {
  return <Icon path={mdiBiathlon} {...props} />;
}

export { mdiBiathlon as path };
