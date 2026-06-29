import { mdiBench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bench(props: IconComponentProps) {
  return <Icon path={mdiBench} {...props} />;
}

export { mdiBench as path };
