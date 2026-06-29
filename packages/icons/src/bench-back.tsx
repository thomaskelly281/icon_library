import { mdiBenchBack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BenchBack(props: IconComponentProps) {
  return <Icon path={mdiBenchBack} {...props} />;
}

export { mdiBenchBack as path };
