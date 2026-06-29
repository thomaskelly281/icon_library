import { mdiBusSchool } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusSchool(props: IconComponentProps) {
  return <Icon path={mdiBusSchool} {...props} />;
}

export { mdiBusSchool as path };
