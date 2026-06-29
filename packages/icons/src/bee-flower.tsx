import { mdiBeeFlower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeeFlower(props: IconComponentProps) {
  return <Icon path={mdiBeeFlower} {...props} />;
}

export { mdiBeeFlower as path };
