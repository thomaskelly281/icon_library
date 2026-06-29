import { mdiAccountSchool } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSchool(props: IconComponentProps) {
  return <Icon path={mdiAccountSchool} {...props} />;
}

export { mdiAccountSchool as path };
